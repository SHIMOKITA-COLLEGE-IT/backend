import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MyRootsScalarWhereInput } from './my-roots-scalar-where.input';
import { Type } from 'class-transformer';
import { MyRootsUpdateManyMutationInput } from './my-roots-update-many-mutation.input';

@InputType()
export class MyRootsUpdateManyWithWhereWithoutRootsInput {

    @Field(() => MyRootsScalarWhereInput, {nullable:false})
    @Type(() => MyRootsScalarWhereInput)
    where!: MyRootsScalarWhereInput;

    @Field(() => MyRootsUpdateManyMutationInput, {nullable:false})
    @Type(() => MyRootsUpdateManyMutationInput)
    data!: MyRootsUpdateManyMutationInput;
}
