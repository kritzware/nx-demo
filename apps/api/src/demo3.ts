type StatementSharedFields = {
  id: string;
  createdAt: Date;
};

type PublisherStatement = StatementSharedFields & {
  type: 'publisher';
  fieldOnlyForPublisher: {
    x: number;
    y: boolean;
  };
};

type ComposerStatement = StatementSharedFields & {
  type: 'composer';
  fieldOnlyForComposer: string | number;
};

const pubStatement: PublisherStatement = {
  id: 'id',
  createdAt: new Date(),
  type: 'publisher',
  fieldOnlyForPublisher: {
    x: 1,
    y: true,
  },
};

function convertPublisherToComposerStatement(
  statement: PublisherStatement
): ComposerStatement {
  const newStatement: ComposerStatement = {
    id: 'id',
    createdAt: new Date(),
    type: 'composer',
    fieldOnlyForComposer: 123,
  };
  return newStatement;
}

// convertPublisherToComposerStatement(pubStatement);
// convertPublisherToComposerStatement({ ...pubStatement, type: 'composer' });
